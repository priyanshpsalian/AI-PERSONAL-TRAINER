import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";

class EventCalendar extends Component {
   state = {
      calendarEvents: [
         {
            title: "Atlanta Monster",
            start: new Date("2019-04-04 00:00"),
            id: "99999998",
         },
         {
            title: "My Favorite Murder",
            start: new Date("2019-04-05 00:00"),
            id: "99999999",
         },
      ],
      events: [
         {
            key: "102",
            previewImg: "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1530743652042-8AW6T0MPM6Q0JYEV6AO9/image-asset.gif",
            title: "Squat",
            impact: "beginner",
            calories: "760",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
    
        {
            key: "104",
            previewImg: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif",
            title: "Pull Ups",
            impact: "beginner",
            calories: "450",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
        {
            key: "105",
            previewImg: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif",
            title: "Lifting",
            impact: "beginner",
            calories: "450",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
        {
            key: "103",
            previewImg: "https://i.pinimg.com/originals/e3/93/d5/e393d50c6f4f5cc42d0b876f40488767.gif",
            title: "Push Ups",
            impact: "beginner",
            calories: "300",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
    
        {
            key: "106",
            previewImg: "https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif",
            title: "Situps",
            impact: "beginner",
            calories: "50",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
    
        {
            key: "109",
            previewImg: "https://i.pinimg.com/originals/81/f1/23/81f1230ab56427e0bb86e2b3c2c6cb6f.gif",
            title: "Deadlifts",
            impact: "beginner",
            calories: "500",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
        {
            key: "108",
            previewImg: "https://thumbs.gfycat.com/OpulentZanyBumblebee-size_restricted.gif",
            title: "Plank",
            impact: "beginner",
            calories: "50",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
        {
            key: "107",
            previewImg: "https://media.tenor.com/fWiC9Ze5eUMAAAAC/lunges-exercise.gif",
            title: "Lunges",
            impact: "beginner",
            calories: "50",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
    
        {
            key: "111",
            previewImg: "https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif",
            title: "Bench Press",
            impact: "beginner",
            calories: "50",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
    
        {
            key: "110",
            previewImg: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif",
            title: "Burpee",
            impact: "beginner",
            calories: "50",
            target_muscle: ["bones", "back", "legs", "quads"],
            s_des:
                "Squats are a lower body exercise that involves bending at the knees and hips to lower and raise the body.",
    
            l_des:
                "Squats are a type of strength training exercise that primarily targets the muscles in the lower body, including the quadriceps, hamstrings, and glutes. To perform a squat, one stands with their feet shoulder-width apart, then lowers their body by bending at the knees and hips until their thighs are parallel to the ground, then stands back up.",
        },
      ],
   };

   /**
    * adding dragable properties to external events through javascript
    */
   componentDidMount() {
      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
         itemSelector: ".fc-event",
         eventData: function (eventEl) {
            let title = eventEl.getAttribute("title");
            let id = eventEl.getAttribute("data");
            return {
               title: title,
               id: id,
            };
         },
      });
   }

   /**
    * when we click on event we are displaying event details
    */
   eventClick = (eventClick) => {
      Alert.fire({
         title: eventClick.event.title,
         html:
            `<div className="table-responsive">
      <table className="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
            eventClick.event.title +
            `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
            eventClick.event.start +
            `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

         showCancelButton: true,
         confirmButtonColor: "#d33",
         cancelButtonColor: "#3085d6",
         confirmButtonText: "Remove Event",
         cancelButtonText: "Close",
      }).then((result) => {
         if (result.value) {
            eventClick.event.remove(); // It will remove event from the calendar
            Alert.fire("Deleted!", "Your Event has been deleted.", "success");
         }
      });
   };

   render() {
      return (
         <div className="animated fadeIn demo-app">
            <Row>
               <Col lg={3}>
					<div className="card">
						<div className="card-header border-0 pb-0">
							<h4 className="text-black fs-20 mb-0">Events</h4>
						</div>
						<div className="card-body" id="external-events">
							{this.state.events.map((event,i) => (
								<div
								   className="fc-event mt-0 ml-0 mb-2 btn btn-block btn-primary"
								   title={event.title}
								   data={event.key}
								   key={event.key}
								>
								  {i+1}. {event.title}
								</div>
							))}
						</div>
					</div>
               </Col>

               <Col lg={9}>
					<div className="card">
						<div className="card-body">
							<div className="demo-app-calendar" id="mycalendartest">
								<FullCalendar
									defaultView="dayGridMonth"
									header={{
									   left: "prev,next today",
									   center: "title",
									   right:
										  "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
									}}
									rerenderDelay={10}
									eventDurationEditable={false}
									editable={true}
									droppable={true}
									plugins={[
									   dayGridPlugin,
									   timeGridPlugin,
									   interactionPlugin,
									]}
									ref={this.calendarComponentRef}
									weekends={this.state.calendarWeekends}
									events={this.state.calendarEvents}
									eventDrop={this.drop}
									// drop={this.drop}
									eventReceive={this.eventReceive}
									eventClick={this.eventClick}
									// selectable={true}
								/>
							</div>
						</div>
					</div>
               </Col>
            </Row>
         </div>
      );
   }
}

export default EventCalendar;
