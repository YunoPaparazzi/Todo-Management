const person = {
    name: 'Ashish',
    address: {
        line1: '123 Baker Street London',
        city: 'London',
        country: 'UK',
    },
    profiles: ['linkedin', 'twitter', 'instagram'],
    printProfile: () => {
        person.profiles.map (
            (profile) => {
                console.log(profile)
            }
        )
    }
}

export default function LearingJavaScript(){
    return(
        <>        
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[1]}</div>
        <div>{person.printProfile()}</div>
        </>
    
    )
}