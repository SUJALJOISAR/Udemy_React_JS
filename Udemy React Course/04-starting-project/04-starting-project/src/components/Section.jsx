// export default function Section({title,id,children}){
//     return(
//         <section id={id}> {/*here just set the 'id' prop explicitly on the built-in section component */}
//             <h2>{title}</h2> {/* set title dyamically(use title prop)*/}
//             {children}
//         </section>
//     );
// }

export default function Section({title,children,...props}){  {}
    return(
        <section {...props}> {/*here just use the built-in forward props to set the remaining props */}
            <h2>{title}</h2> 
            {children}
        </section>
    );
}