import OPTIONNEWUSER from './options';
export const SCREENS = [
    {
    id: 0,
    HeaderQuestion: 'How do we address you ?',
    
    fields : [
        {
            id: 0,
            name: 'FirstName',
            AnswerType:'Text',
            optionSet:null,
            Label : 'First Name'
        },
        {
            id: 1,
            name: 'LastName',
            AnswerType:'Text',
            optionSet:null,
            Label : 'Last Name'
        },
        {
            id: 2,
            name: 'NewUser',
            AnswerType:'Radio',
            optionSet:OPTIONNEWUSER,
            Label : 'New User'
        }
     ]
     }  ,
    {
        id: 1,
        HeaderQuestion: 'Are you insuring the property for the first time or just thinking of switching insurers?',
        
        fields : [
     
            {
                id: 0,
                name: 'Insurer',
                AnswerType:'Radio',
                optionSet:OPTIONNEWUSER,
                Label : 'Insurer'
            }   
        
        ]

    },
    
   
    {
        id: 2,
        HeaderQuestion: ' Glad to meet you ! Where are you located?',
        
        fields : [
     
            {
                id: 0,
                name: 'Location',
                AnswerType:'Text',
                optionSet:'NA',
                Label : 'Enter your Location'
            }   
        
        ]

    },
    {
        id: 3,
        HeaderQuestion: 'What is the Email Address we can contact you at?',
        
        fields : [
     
            {
                id: 0,
                name: 'EmailId',
                AnswerType:'Text',
                optionSet:'NA',
                Label : 'Email Id'
            }   
        
        ]

    },
    {
        id: 4,
        HeaderQuestion: 'What is the Date of your Birth?',        
        fields : [     
            {
                id: 0,
                name: 'Month',
                AnswerType:'Text',
                optionSet:'NA',
                Label : 'Month'
            }  ,
            {
                id: 1,
                name: 'Day',
                AnswerType:'Text',
                optionSet:'NA',
                Label : 'Day'
            } ,
            {
                id: 2,
                name: 'Year',
                AnswerType:'Text',
                optionSet:'NA',
                Label : 'Year'
            }   
         
        
        ]

    },
    {
        id: 5,
        HeaderQuestion: 'At what number can we can contact you?',        
        fields : [     
            {
                id: 0,
                name: 'Contact Number',
                AnswerType:'Text',
                optionSet:'NA',
                Label : 'Contact Number'
            }           
        ]

    },
    
]