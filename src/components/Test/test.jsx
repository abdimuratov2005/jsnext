function Test({data}) {
    const title = data.data.fields.title
    const description = data.data.fields.content

    return (
        <>
            <p>{title}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </>


    );
}

export default Test;