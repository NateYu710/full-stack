'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// URL의 영어 값을 db.json의 한글 부위명과 연결한다.
const partNames = {
  back: '등',
  chest: '가슴',
  shoulders: '어깨',
  legs: '하체',
  arms: '팔',
};

export default function ExerciseListPage() {
  // /exercises/chest에 접속하면 part는 'chest'가 된다.
  const { part } = useParams();

  // 'chest'를 '가슴'으로 바꾼다.
  const partName = partNames[part];

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadExercises() {
      setLoading(true);
      setError('');

      try {
        const response = await fetch('http://localhost:4000/exercises');
        // 전체 운동목록을 가져옴

        if (!response.ok) {
          throw new Error('운동 정보를 불러오지 못했습니다.');
        }

        const data = await response.json();

        // 받아온 운동 목록을 저장한다.
        setExercises(data);
      } catch (error) {
        // 요청에 실패하면 오류 메시지를 저장한다.
        setError(error.message);
      } finally {
        // 성공 여부와 관계없이 로딩을 종료한다.
        setLoading(false);
      }
    }

    loadExercises();
  }, []);

  // 전체 데이터에서 현재 부위의 운동만 남긴다.
  const filteredExercises = exercises.filter(
    (exercise) => exercise.part === partName,
  );

  // 사용자가 url 주소를 잘못들어갔을 상황을 대비
  if (!partName) {
    return (
      <section>
        <p>존재하지 않는 운동 부위입니다.</p>
        <Link href="/">부위 선택으로 돌아가기</Link>
      </section>
    );
  }

  return (
    <section>
      <Link href="/" className="back">
        ← 부위 선택으로 돌아가기
      </Link>

      <h1>{partName} 운동</h1>

      {loading ? (
        <p>운동 정보를 불러오는 중입니다.</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : filteredExercises.length === 0 ? (
        <p>등록된 운동이 없습니다.</p>
      ) : (
        <div className="grid">
          {filteredExercises.map((exercise) => (
            <Link
              key={exercise.id}
              href={`/exercise/${exercise.id}`}
              className="card"
            >
              <h2>{exercise.name}</h2>
              <p>영상과 설명 보기 →</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
