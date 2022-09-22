import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const comp = shallow(<App />);
  it("should render without crashing", () => {
    expect(comp.exists()).toBe(true);
  });
});
