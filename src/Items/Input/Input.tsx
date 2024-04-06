import './Input.css'

interface inputProps{
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputBox=(props:inputProps)=>{
    const {value, onChange} = props;
    return <input className="input-box"  type="search"  value={value} onChange={onChange}/>
}

export default InputBox