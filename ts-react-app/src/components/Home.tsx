import React from "react";

function Home(){
  const someValue: unknown = 123;
  const strLength: number = (someValue as string).length ?? 0 ;
  type Property = 'name' | 'age' | 'phoneNum'; 
  return (<h1>Home</h1>)
}

export default Home