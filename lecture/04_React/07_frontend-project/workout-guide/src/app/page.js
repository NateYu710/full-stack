import Link from 'next/link';
import GuideCard from '../components/GuideCard';

const parts = [
  { name: '가슴', value: 'chest' },
  { name: '등', value: 'back' },
  { name: '하체', value: 'legs' },
  { name: '어깨', value: 'shoulders' },
  { name: '팔', value: 'arms' },
];

export default function HomePage() {
  return (
    <section>
      <p style={{ color: 'green' }}>
        <strong>FIND YOUR WORKOUT</strong>
      </p>

      <h1>어느 부위를 운동할까요?</h1>
      <p>원하는 부위를 선택해 운동 방법을 확인하세요.</p>

      {/* 이 div 안의 목록과 카드를 CSS로 좌우 배치한다. */}
      <div className="home-guide-layout">
        {/* 왼쪽: 운동 부위 목록 */}
        <ol className="part-list">
          {parts.map((part, index) => (
            <li key={part.value} className="part-item">
              <Link href={`/exercises/${part.value}`} className="part-card">
                <span className="part-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="part-name">{part.name}</span>

                <span className="part-arrow" aria-hidden="true">
                  ›
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* 오른쪽: GuideCard.js에서 가져온 안내 카드 */}
        <GuideCard />
      </div>
    </section>
  );
}
