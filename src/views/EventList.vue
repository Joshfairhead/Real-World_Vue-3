<template>
<<<<<<< HEAD
  <h1> AdaCast </h1>
=======
>>>>>>> 3d4eefd5d2f72cb288901e81c9fa1cee86908702
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
<<<<<<< HEAD
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js"

export default {
  name: "EventList  ",
=======
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
>>>>>>> 3d4eefd5d2f72cb288901e81c9fa1cee86908702
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
<<<<<<< HEAD
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
};
=======
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
>>>>>>> 3d4eefd5d2f72cb288901e81c9fa1cee86908702
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
