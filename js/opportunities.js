// Use async/await for asynchronous operations
async function getOpportunities() {
    try {
        const opportunities = await domo.get('/domo/datastores/v2/collections/opportunities/documents/');
        const rows = opportunities.map(opportunity => ({ id: opportunity.id, ...opportunity.content }));

        const options = {
            editable: true,
            action: updateOpportunity
        };

        drawTable(rows, 'opportunities-table', options);
    } catch (error) {
        console.error('Error fetching opportunities:', error);
    }
}

const updateOpportunity = async (id, document) => {
    try {
        await domo.put(`/domo/datastores/v2/collections/opportunities/documents/${id}`, { content: document });
        getOpportunities();
    } catch (error) {
        console.error('Error updating opportunity:', error);
    }
};

async function createOpportunity(document) {
    try {
        await domo.post('/domo/datastores/v2/collections/opportunities/documents/', { content: document });
        getOpportunities();
    } catch (error) {
        console.error('Error creating opportunity:', error);
    }
}

// Use descriptive function names and add comments where necessary
async function fetchLeadsData() {
    try {
        return await domo.get('/data/v2/economicstrength?fields=Metropolitan_Area,Metro_Area_GDP,Median_Home_Prices');
    } catch (error) {
        console.error('Error fetching leads data:', error);
    }
}

async function uploadFile(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);
        const options = { contentType: 'multipart' };
        await domo.post(`/domo/data-files/v2?name=${file.name}`, formData, options);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

// Use descriptive object property names
const opportunityForm = {
    Metropolitan_Area: 0,
    Metro_Area_GDP: 0,
    Median_Home_Prices: 0,
    attachment: new FileUpload(uploadFile)
};

// Use a named function for clarity
function handleOpportunityCreation(document) {
    createOpportunity(document);
}

// Initialize your code
(async () => {
    addButton(opportunityForm, handleOpportunityCreation);
    await getOpportunities();
})();
