// export default function Tabs({children,buttons,buttonContainer}){

//     const ButtonContainer=buttonContainer;

//     return(
//         <>
//         <ButtonContainer>
//         {/* Here all the tab buttons should be displayed */}
//         {buttons}
//         </ButtonContainer>
//         {/* here the actual content should be displayed of the topic of which button is selected */}
//         {children}
//         </>
//     );
// }

export default function Tabs({children,buttons,ButtonContainer}){
    return(
        <>
        <ButtonContainer>
        {/* Here all the tab buttons should be displayed */}
        {buttons}
        </ButtonContainer>
        {/* here the actual content should be displayed of the topic of which button is selected */}
        {children}
        </>
    );
}