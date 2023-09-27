export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
