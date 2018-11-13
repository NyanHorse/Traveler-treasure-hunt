//from src/index.js
// componentDidMount() {
//     fetch("http://localhost:3000/api/v1/game/players")
//         .then(res => res.json())
//         .catch(error => {
//             this.setState({ error: true });
//         });
// }

// addEmail(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/api/v1/game/players", {
//         method: "POST",
//         body: JSON.stringify({ email: this.state.input }),
//         headers: { "Content-Type": "application/json" }
//     })
//         .then(res => {
//             this.setState({ task: true, email: this.state.input });
//         })
//         .catch(error => {
//             this.setState({ error: true });
//         });
// }

// startTime() {
//     fetch("http://localhost:3000/api/v1/game/players", {
//         method: "PATCH",
//         body: JSON.stringify({
//             email: this.state.email
//         }),
//         headers: { "Content-Type": "application/json" }
//     })
//         .then(res => this.setState({ success: true }))
//         .catch(error => {
//             this.setState({ error: true });
//         });
// }

//from task_one
// componentDidMount() {
//     console.log(json.body);
//     fetch("/api/v1/game/tasks")
//         .then(res => res.json())
//         .catch(error => {
//             this.setState({ error: true });
//         });
// }
// getTasks() {
//     fetch("/api/v1/game/tasks", {
//         method: "GET"
//     })
//         .then(res => res.json())
//         .then(json => {
//             this.setState({
//                 poi: json.body.poi,
//                 details: json.body.details,
//                 question: json.body.question,
//                 op1: json.body.answer_one,
//                 op2: json.body.answer_two,
//                 op3: json.body.answer_three
//             });
//         })
//         .catch(error => {
//             this.setState({ error: true });
//         });
// }
