import { useArray, useMount } from "utils";

const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "Jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {
    console.log(value, "value");

    // console.log(value.notExist);

    // add({name:'david'});

    // removeIndex("123");
  });
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((persons: { name: string; age: number }, index: number) => {
        return (
          <div style={{ marginBottom: "30px" }} key={index}>
            <span style={{ color: "red" }}>{index}</span>
            <span>{persons.name}</span>
            <span>{persons.age}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TsReactTest;
