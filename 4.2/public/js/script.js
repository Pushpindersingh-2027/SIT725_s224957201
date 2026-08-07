document.addEventListener("DOMContentLoaded", function () {

    const selects = document.querySelectorAll("select");

    M.FormSelect.init(selects);

    loadEvents();
});


async function loadEvents() {

    const response = await fetch("/api/events");

    const events = await response.json();

    const eventList =
        document.getElementById("eventList");

    eventList.innerHTML = "";


    events.forEach(event => {

        eventList.innerHTML += `

            <div class="col s12 m6">

                <div class="card">

                    <div class="card-content">

                        <span class="card-title">
                            ${event.title}
                        </span>

                        <p>
                            <strong>Type:</strong>
                            ${event.eventType}
                        </p>

                        <p>
                            <strong>Date:</strong>
                            ${event.date}
                        </p>

                        <p>
                            <strong>Time:</strong>
                            ${event.startTime}
                            -
                            ${event.endTime}
                        </p>

                        <p>
                            <strong>Location:</strong>
                            ${event.location}
                        </p>

                        <p>
                            <strong>Priority:</strong>
                            ${event.priority}
                        </p>

                        <p>
                            <strong>Notes:</strong>
                            ${event.notes || "No notes"}
                        </p>

                    </div>


                    <div class="card-action">

                        <button
                            class="btn red"
                            onclick="deleteEvent('${event._id}')">

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


async function addEvent() {

    const event = {

        title:
            document.getElementById("title").value,

        eventType:
            document.getElementById("eventType").value,

        date:
            document.getElementById("date").value,

        startTime:
            document.getElementById("startTime").value,

        endTime:
            document.getElementById("endTime").value,

        location:
            document.getElementById("location").value,

        priority:
            document.getElementById("priority").value,

        notes:
            document.getElementById("notes").value

    };


    if (
        !event.title ||
        !event.eventType ||
        !event.date ||
        !event.startTime ||
        !event.endTime
    ) {

        M.toast({
            html: "Please complete the required fields"
        });

        return;
    }


    await fetch("/api/events", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(event)

    });


    M.toast({
        html: "Event saved to ShiftSync"
    });


    loadEvents();

}


async function deleteEvent(id) {

    await fetch(`/api/events/${id}`, {

        method: "DELETE"

    });


    M.toast({
        html: "Event deleted"
    });


    loadEvents();

}