import { useMode } from "../context/Mode";

export default function SkeletonLoader() {
  const { mode } = useMode();
  return (
    <div className={`skeleton-note-list ${mode}`}>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
      <div className={`skeleton-item ${mode}`}>
        <div className={`skeleton-title ${mode}`}></div>
        <div className={`skeleton-date ${mode}`}></div>
        <div className={`skeleton-body ${mode}`}></div>
        <div className={`skeleton-button ${mode}`}></div>
      </div>
    </div>
  );
}
