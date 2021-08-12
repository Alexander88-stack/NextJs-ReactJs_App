import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails() {
    return (
        <MeetupDetail
            image=''
            title=''
            address=''
            description=''
        />
        
    );
};

export async function getStaticPaths() {
    return{
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1',
            },
         },
         {
             params: {
                 meetupId: 'm2',
             },
         },
        ],
    };
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                image: '',
                id: '',
                title: '',
                adress: '',
                description: ''

            }
        }
    }
}

export default MeetupDetails;