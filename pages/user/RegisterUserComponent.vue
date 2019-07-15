<template>
    <div class="container">
        <form class="form-horizontal" action="/action_page.php">
            <div class="form-group">
                <label class="control-label" for="email">Email:</label>
                <div class=" ">
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label" for="pwd">Password:</label>
                <div class="">          
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label" for="pwd">Nhập lại Password:</label>
                <div class="">          
                    <input type="password" class="form-control" id="pwd" placeholder="Nhập lại Password" name="pwd">
                </div>
            </div>
            
            <div class="form-group">        
                <div class="">
                    <button type="submit" class="btn btn-default btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>



<script>
export default {
    layout: 'admin'
    
}
</script>
<style>
    .form-horizontal{width:50%;margin: 0 auto}
</style>
