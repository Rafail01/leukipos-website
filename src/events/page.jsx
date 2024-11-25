const videosEvents = [
    '/videos/videoEvent1.mp4',
    '/videos/videoEvent2.mp4',
    '/videos/videoEvent3.mp4',
    '/videos/videoEvent4.mp4',
    '/videos/videoEvent5.mp4',
    '/videos/videoEvent6.mp4',
    '/videos/videoEvent7.mp4',
    '/videos/videoEvent8.mp4',
    '/videos/videoEvent9.mp4'
];



const EventsPage = () => {
    return (
        <div style={{padding: '20px'}}>
            <h2 style={{textAlign: "center"}}>EVENTS – TRIPS – FESTIVALS – TV SHOWS</h2>
            <p>
                Ο σύλλογός μας μετέχει σε πολλά φεστιβάλ παραδοσιακών χορών στην Ελλάδα αλλά και στο εξωτερικό. Κάθε χρόνο έχει ένα πλούσιο πρόγραμμα εκδηλώσεων, ενώ παράλληλα έχει λάβει μέρος σε πολλές τηλεοπτικές εκπομπές τοπικής και πανελλήνιας εμβέλειας, οι οποίες έχουν ως σκοπό την προβολή και την ανάδειξη της παραδοσιακής μουσικοχορευτικής μας, κληρονομιάς. Συχνά οργανώνει εκδρομές, συνεστιάσεις και μετέχει σε πολιτιστικά δρώμενα των δήμων Καλαμάτας και δυτικής Μάνης, όπου και δραστηριοποιείται. Παράλληλα, ο σύλλογος έχει να αναδείξει παραστάσεις από την ερασιτεχνική του θεατρική ομάδα και την χορωδία παραδοσιακής μουσικής.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
                {videosEvents.map((videoSrc, index) => (
                    <div key={index} style={{textAlign: 'center'}}>
                        <video width="100%" height="auto" controls>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p>Video {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
