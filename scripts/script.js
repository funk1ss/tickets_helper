function render_ticket(ticket_number) {
    let ticket_number_title = document.getElementById("ticket_number")
    ticket_number_title.textContent = "Билет №" + ticket_number
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
    let task1_img_link1 = document.getElementById("task1_img_link1")
    let task1_img1 = document.getElementById("task1_img1")
    let task1_img_link2 = document.getElementById("task1_img_link2")
    let task1_img2 = document.getElementById("task1_img2")
    let task1_text1 = document.getElementById("task1_text1")
    let task1_text2 = document.getElementById("task1_text2")

    let question_2 = document.getElementById("question_2")
    let task2_img_link1 = document.getElementById("task2_img_link1")
    let task2_img1 = document.getElementById("task2_img1")
    let task2_img_link2 = document.getElementById("task2_img_link2")
    let task2_img2 = document.getElementById("task2_img2")
    let task2_text1 = document.getElementById("task2_text1")
    let task2_text2 = document.getElementById("task2_text2")

    let question_3 = document.getElementById("question_3")
    let link_image = document.getElementById("link_image")
    let answer_img = document.getElementById("answer_img")
    let code_3 = document.getElementById("code_3")

    question_1.textContent = ticket.one.title
    task1_text1.textContent = ticket.one.text1
    task1_text2.textContent = ticket.one.text2
    task1_img_link1.href =  ticket.one.image1
    task1_img1.src = ticket.one.image1
    task1_img_link2.href =  ticket.one.image2
    task1_img2.src = ticket.one.image2

    question_2.textContent = ticket.two.title
    task2_text1.textContent = ticket.two.text1
    task2_text2.textContent = ticket.two.text2
    task2_img_link1.href =  ticket.two.image1
    task2_img1.src = ticket.two.image1
    task2_img_link2.href =  ticket.two.image2
    task2_img2.src = ticket.two.image2





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
        case 2:
            ticket = tasks.ticket_2
            break
        case 3:
            ticket = tasks.ticket_3
            break
        case 4:
            ticket = tasks.ticket_4
            break
        case 5:
            ticket = tasks.ticket_5
            break
        case 6:
            ticket = tasks.ticket_6
            break
        case 7:
            ticket = tasks.ticket_7
            break
        case 8:
            ticket = tasks.ticket_8
            break
        case 9:
            ticket = tasks.ticket_9
            break
        case 10:
            ticket = tasks.ticket_10
            break            
        case 11:
            ticket = tasks.ticket_11
            break
        case 12:
            ticket = tasks.ticket_12
            break
        case 13:
            ticket = tasks.ticket_13
            break
        case 14:
            ticket = tasks.ticket_14
            break
        case 15:
            ticket = tasks.ticket_15
            break
        case 16:
            ticket = tasks.ticket_16
            break
        case 17:
            ticket = tasks.ticket_17
            break
        case 18:
            ticket = tasks.ticket_18
            break
        case 19:
            ticket = tasks.ticket_19
            break
        case 20:
            ticket = tasks.ticket_20
            break
        case 21:
            ticket = tasks.ticket_21
            break
        case 22:
            ticket = tasks.ticket_22
            break
        case 23:
            ticket = tasks.ticket_23
            break
        case 24:
            ticket = tasks.ticket_24
            break
        case 25:
            ticket = tasks.ticket_25
            break
        case 26:
            ticket = tasks.ticket_26
            break
        case 27:
            ticket = tasks.ticket_27
            break
        case 28:
            ticket = tasks.ticket_28
            break
        case 29:
            ticket = tasks.ticket_29
            break
        case 30:
            ticket = tasks.ticket_30
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