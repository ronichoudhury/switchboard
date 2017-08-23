import { select } from 'd3-selection';

const injectPermalink = (msgView) => {
  msgView.getMessageIDAsync().then(id => {
    const origin = window.location.origin.replace('inbox', 'mail');
    const pathname = window.location.pathname;
    const permalink = `${origin}/mail${pathname}#inbox/${id}`;

    const parentNode = select('div.hJ').node().parentNode;
    select(parentNode)
      .insert('div', 'div.hJ + *')
      .append('a')
      .attr('href', permalink)
      .attr('target', '_blank')
      .text('open in gmail');
  });
};

InboxSDK.load('2', 'switchboard').then(sdk => {
  sdk.Conversations.registerMessageViewHandler(injectPermalink);
});
