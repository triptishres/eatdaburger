// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devour: newDevour,
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            () => {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
            devour: $("[name=devour]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});