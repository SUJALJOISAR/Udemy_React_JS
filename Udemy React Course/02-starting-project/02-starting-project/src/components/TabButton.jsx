// export default function TabButton(props){
//     return(
//         <li><button>{props.children}</button></li>
//     );
// }

// or use destructuring 
// export default function TabButton({children}){

//     function handleClick(){
//         console.log("Hello World!");
//     }

//     return(
//         <li>
//             <button onClick={handleClick}>{children}</button>
//         </li>
//     );
// }
// This above method is useful when components take a single piece of renderable content,this approach is closer to "normal HTMl usage"

//if we use custom attributes instead of "children" then:-
// export default funtion TabButton({label}){  
// return(
    // <li><button>{label}</button></li>
// );
// }
// This approach is useful when we want to pass multiple smaller pieces of information that must be passed to a component
 {/* for below approach this can be used:-
<TabButton label="components"><TabButton /> we have just use "label" instead of writting inside the opening and closing of component function
 */}

export default function TabButton({children,onSelect,isSelected}){
    return(
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}
//in most of the cases 'onSelect' is the special prop which is passed as an value to the built-in button prop called 'onClick' and event will be handled
// by executing particular function and this value of this 'onSelect' prop provided by react is set in app() component.
// 'isSelected' is a prop that accepts the "boolean" value.if it is "true" then "active" class will be there otherwise not