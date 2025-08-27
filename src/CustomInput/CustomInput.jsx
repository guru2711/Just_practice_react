const CustomInput = ({refs,...props}) => {
return(
    <div>
        <input ref={refs} {...props}/>
        </div>
)
}
export default CustomInput;