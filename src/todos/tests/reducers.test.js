import { expect } from "chai";
import { todos } from "../reducers";

describe("The todos reducers", () => {
  it("Add a new todo when CREATE_TODO action is received", () => {
    const fakeTodo = { id: 1, text: "hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload:  fakeTodo
    };
    const originalState = { isLoading: false, data: [], error: null };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
      error: null
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
