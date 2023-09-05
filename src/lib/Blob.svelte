<script>
    export const Blob = document.getElementById('blob');

    document.body.onpointermove = event => {
        const {clientX, clientY} = event;

        blob.style.left = `${clientX}px`
        blob.style.top = `${clientY}px`
    }
</script>

<div id="blob" class="bg-white h-[500px] absolute aspect-square left-2/4 top-2/4 middle round">{Blob}</div>