import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.part.parts[0].name}
        exercises={props.part.parts[0].exercises}
      />
      <Part
        part={props.part.parts[1].name}
        exercises={props.part.parts[1].exercises}
      />
      <Part
        part={props.part.parts[2].name}
        exercises={props.part.parts[2].exercises}
      />
    </div>
  );
};

export default Content;
