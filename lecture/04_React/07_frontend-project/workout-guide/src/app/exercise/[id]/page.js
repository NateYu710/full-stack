'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const partPaths = {
  등: 'back',
  가슴: 'chest',
  어깨: 'shoulders',
  하체: 'legs',
  팔: 'arms',
};

export default function ExerciseDetailPage() {
  // /exercise/1이면 id는 '1'이다.
  const { id } = useParams();

  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadExercise() {
      setLoading(true);
      setError('');
      setExercise(null);
      // 다른 운동을 불러오기 전에 상태를 초기화

      try {
        // URL에서 받은 id를 API 주소에 넣는다.
        const response = await fetch(`http://localhost:4000/exercises/${id}`);

        if (response.status === 404) {
          throw new Error('해당 운동을 찾을 수 없습니다.');
        }

        if (!response.ok) {
          throw new Error('운동 정보를 불러오지 못했습니다.');
        }

        const data = await response.json();
        setExercise(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadExercise();
  }, [id]);

  if (loading) {
    return <p>운동 정보를 불러오는 중입니다.</p>;
  }

  if (error || !exercise) {
    return (
      <section>
        <p className="error">{error || '해당 운동을 찾을 수 없습니다.'}</p>

        <p>
          <Link href="/">부위 선택으로 돌아가기</Link>
        </p>
      </section>
    );
  }

  // 운동 부위에 맞는 목록 주소를 만든다.
  const partPath = partPaths[exercise.part];
  const listUrl = `/exercises/${partPath}`;

  return (
    <section>
      <Link href={listUrl} className="back">
        ← 운동 목록으로 돌아가기
      </Link>

      <h1>{exercise.name}</h1>
      <p>운동 부위: {exercise.part}</p>

      {exercise.youtubeId ? (
        <>
          <iframe
            className="video"
            src={`https://www.youtube.com/embed/${encodeURIComponent(
              exercise.youtubeId,
            )}`}
            title={`${exercise.name} 운동 영상`}
            allow="fullscreen"
            allowFullScreen
          />

          <button
            type="button"
            onClick={async (e) => {
              // 버튼 바로 앞에 있는 iframe 요소를 가져온다.
              const iframe = e.currentTarget.previousElementSibling;

              try {
                // iframe을 전체 화면으로 표시한다.
                await iframe.requestFullscreen();
              } catch (error) {
                console.error('전체 화면 전환 실패:', error);
              }
            }}
          >
            전체 화면
          </button>
        </>
      ) : (
        <div className="card">아직 영상이 등록되지 않았습니다.</div>
      )}

      <h2>운동 설명</h2>
      <p>{exercise.description}</p>
    </section>
  );
}
