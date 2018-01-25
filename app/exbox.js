InboxSDK.load(1, 'sdk_EXBOX_APP_ID_2579956272').then(function(sdk) {

	// the sdk's been loaded
	sdk.Compose.registerComposeViewHandler(function(composeView) {

		// build stuff!...
		// https://www.inboxsdk.com/docs/#Concepts

		// a compose view 
		composeView.addButton({
			title: "My Exbox Controller!",
			iconUrl: '',
			onClick: function( event ) {
				event.composeView.insertTextIntoBodyAtCursor('Helo Exbox');
			},
		});
	});
});