
const FilterPerson = ({valueFilter, changeFilter}) => {

    return(
        <div>
            mon filter
            <input value={valueFilter} onChange={changeFilter}/>
        </div>
    )
}

export default FilterPerson