async function fetchData (dataresource) {
    let resource = await fetch(dataresource).then(response =>  {
        if (response.status !== 200) {
            throw new Error(`SELF-DESCTRUCT INITIATED  ${response.status}`);
        }

        return response;

    })


    let dataset = await resource.json();

    return dataset;  

}

export{ fetchData };