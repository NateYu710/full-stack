export default function GuideCard() {
  return (
    <aside className="guide-card">
      <span className="guide-badge">QUICK GUIDE</span>

      <h2>처음 오셨나요?</h2>
      <p className="guide-intro">세 단계로 원하는 운동을 찾아보세요.</p>

      <ol className="guide-steps">
        <li>
          <span className="guide-number" aria-hidden="true">
            01
          </span>
          <div>
            <h3>부위 선택</h3>
            <p>알아보고 싶은 운동 부위를 골라보세요.</p>
          </div>
        </li>

        <li>
          <span className="guide-number" aria-hidden="true">
            02
          </span>
          <div>
            <h3>운동 찾기</h3>
            <p>목록에서 궁금한 운동을 선택하세요.</p>
          </div>
        </li>

        <li>
          <span className="guide-number" aria-hidden="true">
            03
          </span>
          <div>
            <h3>영상으로 배우기</h3>
            <p>운동 설명과 영상을 함께 확인하세요.</p>
          </div>
        </li>
      </ol>

      <div className="guide-footer">운동의 시작, 여기서 함께해요.</div>
    </aside>
  );
}
