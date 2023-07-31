const Hello = ({name, age}) => {

    const born = () => new Date().getFullYear() - age
   return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p> So you were born in {born()}</p>
        </div>
    )
}

export default Hello