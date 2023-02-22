const Filter = (props)=>{
    console.log('Filter component rendering')

    return (
        <div>
            <div>
                filter shown with<input onChange={props.onChange} />
            </div>
        </div>
    )
}
export default Filter;
