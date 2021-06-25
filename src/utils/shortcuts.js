export const shortcuts = [
    {
        title : 'Open',
        shortkey : 'o',
        action: (params)=>{
            if(params.router){
                params.router.push('/hero/' + params.selection.id)
            }
        }
    },
    {
        title: 'Go to teams',
        shortkey : 't',
        action: (params)=>{
            if(params.router){
                params.router.push('/teams')
            }
        }
    },
    {
        title: 'Back',
        shortkey : 'b',
        action: (params)=>{
            if(params.router){
                params.router.go(-1);
            }
        }
    },
    {
        title:'Rename Character',
        shortkey: 'r',
        inputs:{
            title:'New Name',
            type:'Text',
        },
        action:(params)=>{
            debugger;
            return new Promise(async(resolve,reject)=>{
                const result = await $http.patch('characters',{
                    records:[{
                        id: params.selection.id,
                        fields:{
                            Name : params.options
                        }
                    }]
                });
                resolve(result);
            });
        }
    },
    {
        title: 'Add to team',
        shortkey : 'g',
        inputs:{
            title: 'Select Team',
            val: '',
            type:'Select',
            options:()=>{
                return new Promise(async(resolve,reject)=>{
                    const result = await $http.get('teams');
                    resolve(result.data.records);
                });
            }
        },
        action: (params)=>{
            return new Promise(async(resolve,reject)=>{
                let team = params.options.fields.TeamMembers;
                team.push(params.selection.id)
                const result = await $http.patch('teams',{
                    records:[{
                        id: params.options.id,
                        fields:{
                            TeamMembers : team
                        }
                    }]
                });
                resolve(result);
            });
        }
    }
]