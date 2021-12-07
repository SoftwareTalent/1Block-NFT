export default function FaqSelect({ options }) {
  return (
    <select>
      {options.map((op, index) => {
        return <option value={index}>{op}</option>;
      })}
    </select>
  );
}
