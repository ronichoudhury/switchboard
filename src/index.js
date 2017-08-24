import { event,
         select } from 'd3-selection';

const injectPermalink = (msgView) => {
  msgView.getMessageIDAsync().then(id => {
    const origin = window.location.origin.replace('inbox', 'mail');
    const pathname = window.location.pathname;
    const permalink = `${origin}/mail${pathname}#inbox/${id}`;

    const msgBody = msgView.getBodyElement();
    const parentNode = select(msgBody.parentNode)
      .select('div.hJ')
      .node()
      .parentNode;

    select(parentNode)
      .insert('div', 'div.hJ')
      .classed('e8', true)
      .style('display', 'inline-block')
      .style('position', 'relative')
      .style('top', '8px')
      .style('margin-right', '4px')
      .append('a')
      .attr('href', permalink)
      .attr('target', '_blank')
      .on('click', () => {
        event.stopPropagation();
      })
      .append('img')
      .attr('src', chrome.extension.getURL('gmail.png'));
  });
};

InboxSDK.load('2', 'switchboard').then(sdk => {
  sdk.Conversations.registerMessageViewHandler(injectPermalink);
});
