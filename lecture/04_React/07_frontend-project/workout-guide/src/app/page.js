import Link from "next/link";

const parts = [
  {name: '가슴', value: 'chest'},
  {name: '등', value: 'back'},
  {name: '하체', value: 'leg'},
  {name: '어깨', value: 'sholder'},
  {name: '팔', value: 'arm'}
]


export default function HomePage() {
  return (
    <section>
      <p style={{ color:'green'}}><strong>FIND YOUR WORKOUT</strong></p>
      <h1>어느 부위를 운동할까요?</h1>
      <p>원하는 부위를 선택해 운동 방법을 확인하세요.</p>

       <ol className="part-list">
        {parts.map((part, index) => (
          <li key={part.value} className="part-item">
            <Link
              href={`/exercises/${part.value}`}
              className="part-card"
            >
              {/* 0부터 시작하는 index를 01, 02, 03 형태로 표시 */}
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
    </section>
  );
}