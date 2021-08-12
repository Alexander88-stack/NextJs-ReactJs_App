import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: '',
        address: 'Bay street 7, 228892 Stockholm Sweden',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: '',
        address: 'Mount Fyffe, New Zealand',
        description: 'This is a second meetup!'
    }
];

function HomePage(props) {


    return (
        
            <MeetupList meetups={props.meetups} />
        
    );
};
//     USE ONLY IN CASE LOGIN OR SIMILAR
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

    // fetch data from an API

//     return {
//         props: DUMMY_MEETUPS
//     };
// };

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1 
    };
}

export default HomePage;