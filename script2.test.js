const axios = require('axios').default;
const swapi = require('./script2');

it('calls jsonplaceholder to get id',(done)=>{
    expect.assertions(1)
    return swapi.getPeopleAxios(axios).then(res=>{
        expect(res.data.id).toBeUndefined();
        done();
    })
})
it('calls jsonplaceholder to get id with a promise',(done)=>{
    expect.assertions(2)
    return swapi.getPeopleAxios(axios).then(data=>{
        expect(data.data.id).toEqual(1);
        expect(data.data.length).toBeGreaterThen(5);
        done();
    })
})
it('get people returns count and results',()=>{
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            id:1,
            userid:1
          
    }))
    expect.assertions(2)
    return swapi.getPeople(mockFetch).then(data=>{
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://jsonplaceholder.typicode.com/posts/1')
    })
})