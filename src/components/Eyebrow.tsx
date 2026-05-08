type Props = { num: string; label: string };

export function Eyebrow({ num, label }: Props) {
  return (
    <div className="eyebrow">
      <span className="num">{num}</span> {label.toUpperCase()}
    </div>
  );
}
