<template>
    <div class="container-fluid">
        <main>
            <div class="fof">
                <h1>Error 404</h1>
            </div>
        </main>
    </div>
</template>
  
<script>

export default {
   
};
</script>
<style>
* {
    transition: all 0.6s;
}

.fof {
    display: table-cell;
    vertical-align: middle;
}

.fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
}

@keyframes type {
    from {
        box-shadow: inset -3px 0px 0px #888;
    }

    to {
        box-shadow: inset -3px 0px 0px transparent;
    }
}
</style>
  