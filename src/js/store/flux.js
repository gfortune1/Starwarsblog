const getState = ({ getStore, getActions, setStore }) => {
	
	let apiUrl="https://swapi.dev/api/"
	
	return {
		store: {
			characters:[]
			
		},
		actions: {
			getCharacters:()=>{
				fetch(apiUrl+"people").then(resp=>resp.json()).then(data=>setStore({characters:data.results}))
			}
			
				
			}
		}
	};


export default getState;
