interface Project {
    emoji: string;
    sentnce?: string;
}

export default function WelcomeCard() {
    const time: number = new Date().getHours();
    let emoji = "";
    let sentence = "???";
    if (time >= 6 && time < 17) {
        emoji = "Hi There👋";
        sentence = "Good morning Night City! What's new today?";
    } else if (time >= 17) {
        emoji = "Hi There👋";
        sentence = "Good evening Night City! Ready for the big one?";
    } else {
        emoji = "😡";
    }
    const project: Project = { emoji, sentnce: sentence };

    return (
        <div class="card flex bg-base-100 shadow-xl">
            <div class="card-body rounded-md ">
                <h1 class="card-title text-6xl text-right">{project.emoji}</h1>
                <p>{project.sentnce}</p>
            </div>
        </div>
    );
}
