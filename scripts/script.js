function render_ticket(ticket_number) {
    ticket = choose_ticket(ticket_number)
    tasks_container = document.getElementById("tasks_container")
    if (tasks_container.classList.contains("hidden")){
        tasks_container.classList.remove("hidden")
        tasks_container.classList.add("tasks_container")
    }
    else{
        tasks_container.classList.remove("tasks_container")
        tasks_container.classList.add("tasks_container")
    }

    let question_1 = document.getElementById("question_1")
    let answer_1 = document.getElementById("answer_1")

    let question_2 = document.getElementById("question_2")
    let answer_2 = document.getElementById("answer_2")

    let question_3 = document.getElementById("question_3")
    let link_image = document.getElementById("link_image")
    let answer_img = document.getElementById("answer_img")
    let code_3 = document.getElementById("code_3")

    question_1.textContent = ticket.one.title
    answer_1.textContent = ticket.one.text

    question_2.textContent = ticket.two.title
    answer_2.textContent = ticket.two.text

    question_3.textContent = ticket.third.title
    answer_img.src = ticket.third.image
    link_image.href = ticket.third.image
    code_3.textContent = ticket.third.code
}

// Определяем номер билета
function choose_ticket(ticket_number){
    let ticket = null
    switch (ticket_number){
        case 1:
            ticket = tasks.ticket_1
            break
        default:
            break

        
    }
    return ticket;
}
// Гамбургер
function hamburger() {
    let tickets_list = document.getElementById("tickets-list")

    if (tickets_list.classList.contains("tickets-list")){
        tickets_list.classList.remove("tickets-list")
        tickets_list.classList.add("hidden")
    }
    else{
        tickets_list.classList.remove("hidden")
        tickets_list.classList.add("tickets-list")
    }

}