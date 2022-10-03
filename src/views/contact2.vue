<template>
    <div class="container min-h-100 py-4">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-md-8">
                <form action="https://formspree.io/f/meqdeker" method="post">
                    <h1>Contact me</h1>
                    <fieldset>
                        <legend><span class="number">1</span> Your Information</legend>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name">
                        <label for="name">Location:</label>
                        <input type="text" id="name" name="user_location">
                        <label for="email">Email:</label>
                        <input type="email" id="mail" name="user_email">
                    </fieldset>
                    <fieldset>
                        <legend><span class="number">2</span>Message</legend>

                        <label for="msg"></label>
                        <textarea id="msg" name="user_msg"></textarea>
                    </fieldset>
                    <button type="submit" class="my-5">send</button>
                </form>
            </div>
            <hr>
            <div class="col-2">
            </div>
        </div>
    </div>
    <div class="col-md-2"></div>
    
</template>
  
<script>
import contactView from '@/views/contactView'
export default {
    name: '',
    components: {
        contactView
    }
}
</script>
  
<style scoped>
h1 {
    margin: 0 0 30px 0;
    text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
    margin: 0 4px 8px 0;
}

select {
    padding: 6px;
    height: 32px;
    border-radius: 2px;
}
button {
    padding: 19px 39px 18px 39px;
    color: #FFF;
    background-color: black;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #c2cbc5;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
    margin-bottom: 10px;
}

fieldset {
    margin-bottom: 30px;
    border: none;
}

legend {
    font-size: 1.4em;
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 8px;
}

label.light {
    font-weight: 300;
    display: inline;
}

.number {
    background-color: black;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 100%;
}

@media screen and (min-width: 480px) {

    form {
        max-width: 480px;
    }

}
</style>