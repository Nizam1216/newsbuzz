import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


const userLinks = [
    {
        id: 1,
        name: "Nizam",
        url: "https://www.linkedin.com/posts/navjangra_linkedin-networking-socialmedia-activity-7066359563058393088-E8p5?utm_source=share&utm_medium=member_android"
    },
    {
        id: 2,
        name: "Lokesh",
        url: "https://www.linkedin.com/posts/kaustubhborwankar_mentor-mentoring-introverts-activity-7066368804527779840-qy7c?utm_source=share&utm_medium=member_android"
    },
    {
        id: 3,
        name: "Sajid",
        url: "https://www.linkedin.com/posts/shah-zaib-2ba48026a_world-great-flipping-activity-7066368059250216960-TqfM?utm_source=share&utm_medium=member_android"
    },
    {
        id: 4,
        name: "Nagarjuna",
        url: "https://www.linkedin.com/posts/parul-gautam-731554225_microsoftwindows-keyboardshortcut-alphabet-activity-7066370352699875328-Xeeb?utm_source=share&utm_medium=member_android"
    },
    {
        id: 5,
        name: "balakrishna",
        url: "https://www.linkedin.com/posts/lia-jauw-b28aa2261_grit-perseverance-activity-7066323070877130752-2Irl?utm_source=share&utm_medium=member_desktop"
    },
    {
        id: 6,
        name: "Nagaraju",
        url: "https://www.linkedin.com/posts/rajguptak_rajlearnings-mindfulness-kindness-activity-7066372712784437248-RPtp?utm_source=share&utm_medium=member_android"
    },
    {
        id: 7,
        name: "kruthik",
        url: "https://www.linkedin.com/posts/salwaqget_design-letsconnect-innovation-activity-7066374901917503489-yWES?utm_source=share&utm_medium=member_android"
    },
    {
        id: 8,
        name: "rohan",
        url: "https://www.linkedin.com/posts/dr-jayanta-ghosh_art-activity-7066377602441093120-Iz3E?utm_source=share&utm_medium=member_android"
    },
    {
        id: 9,
        name: "vinay",
        url: "https://www.linkedin.com/feed/update/urn:li:share:7066349552089337856/"
    },
    {
        id: 10,
        name: "ajay",
        url: "https://www.linkedin.com/posts/priya-vajpeyi_creativity-management-digitalmarketing-activity-7066378352185479171-YB5F?utm_source=share&utm_medium=member_android"
    },
    {
        id: 11,
        name: "kuch bhi",
        url: "https://www.linkedin.com/posts/akshat-pandey-aaa-_be-yourself-everyone-else-is-already-taken-activity-7066381619237990401-I6kn?utm_source=share&utm_medium=member_desktop"
    },
];

const Unvisited = () => {
    return (
        <div>
           <Navbar />
           <h1 className='container ' style={{display:'flex',alignItems:'center'}}> Recently Visited posts</h1>
            {userLinks.map((user) => (
                <Link
                    key={user.id}
                    to={user.url}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        className="card my-2 container"
                        style={{
                            width: '60rem',
                            backgroundColor: "rgb(185 191 227)",
                            color: '#000'
                        }}
                    >

                    
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                    </div>
                    {user.url}
                    </div>
                </Link>
            ))}

        </div>
    );
}

export default Unvisited;


//export default Unvisited
