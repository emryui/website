export function Absurd<A>(_: never): A {
  throw new Error("Called `absurd` function which should be uncallable");
}
