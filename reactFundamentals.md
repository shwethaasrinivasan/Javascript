**React Hooks**

1. Keep separate files for separate components
2. 2 ways of export - default export, named export - module cannot have multiple default exports
   - export const CDN_URL
   - export const LOGO_URL
   - export default RestaurantCard
3. Named exports are imported like -> import { CDN_URL } from "../../utils/constants"
4. React is efficient in DOM manipulation, React element is object
5. Virtual DOM, Diff algorithm
6. State variable - super powerful variable - Hooks! - JS function
7. Normal JS Utility functions - facebook developers wrote this.
 - useState() - used to create super powerful react variables. used to create state variable - maintains the state of the component
   - const [listofrest] = useState([]); - this function keeps our UI in sync with data layer
 - useEffect()

8. Whenever state variable gets updated, react re-renders the component.
9. React uses something called **reconciliation algorithm** also known as **react fiber (in React16)**
10. Efficient DOM Manipulation, React creates a Virtual DOM, actual DOM are the tags(<div>...), but virtual DOM is the representation of the actual DOM. The object is react Virtual DOM.
11. Diff algorithm  finds difference between updated Virtual DOM and previous Virtual DOM. Finding difference between 2 objects are faster.