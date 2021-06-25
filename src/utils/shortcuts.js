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
        title: 'Teams',
        shortkey : 't',
        action: (params)=>{
            if(params.router){
                params.router.push('/teams')
            }
        }
    },
    {
        title: 'Missions',
        shortkey : 'm',
        action: (params)=>{
            if(params.router){
                params.router.push('/missions')
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
        title: 'Add to team',
        shortkey : 'Ctrl + T',
        action: (params)=>{
            if(params.router){
                params.router.go(-1);
            }
        }
    }
]