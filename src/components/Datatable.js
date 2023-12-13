// DataTable.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ category, subcategory }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Implement your data-fetching logic here
        // For example, you can use APIs or predefined data structures
        let responseData;

        if (category === 'Healthcare') {
          if (subcategory === 'Sales') {
            // Fetch data for finance AR
            // Example API call: responseData = await fetch('/api/finance/ar');
             responseData = [
                { id: 1, KPI: 'Sales Revenue', Description: 'Total revenue generated', Industry: 'Healthcare' },
                { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new patient', Industry: 'Healthcare' },
                { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a patient over their lifetime', Industry: 'Healthcare' },
                { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of patient inquiries converted to actual patients', Industry: 'Healthcare' },
                { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per patient visit', Industry: 'Healthcare' },
                { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total revenue', Industry: 'Healthcare' },
                { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of patients retained over a specific period', Industry: 'Healthcare' },
                { id: 8, KPI: 'Inventory Turnover', Description: 'How quickly medical supplies or equipment are sold and replaced', Industry: 'Healthcare' },
                { id: 9, KPI: 'Repeat Purchase Rate', Description: 'Percentage of patients who return for additional services', Industry: 'Healthcare' },
                { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to actual patients', Industry: 'Healthcare' },
              ];
              
              // Log the responseData
              console.log(responseData);
          } else if (subcategory === 'Finance') {
            // Fetch data for finance PR Expense
            // Example API call: responseData = await fetch('/api/finance/pr-expense');
             responseData = [
                { id: 1, KPI: 'Patient Satisfaction Score', Description: 'Measure of patient happiness with services', Industry: 'Healthcare' },
                { id: 2, KPI: 'Bed Occupancy Rate', Description: 'Percentage of beds occupied in a healthcare facility', Industry: 'Healthcare' },
                { id: 3, KPI: 'Average Length of Stay', Description: 'Average number of days a patient stays in the facility', Industry: 'Healthcare' },
                { id: 4, KPI: 'Physician Productivity', Description: 'Number of patients seen per physician per day', Industry: 'Healthcare' },
                { id: 5, KPI: 'Emergency Room Wait Time', Description: 'Average time patients spend in the emergency room', Industry: 'Healthcare' },
                { id: 6, KPI: 'Health Outcomes Index', Description: 'Measurement of patient health improvement over time', Industry: 'Healthcare' },
                { id: 7, KPI: 'Operating Margin', Description: 'Percentage of revenue that remains after expenses', Industry: 'Healthcare' },
                { id: 8, KPI: 'Readmission Rate', Description: 'Percentage of patients readmitted within a certain period', Industry: 'Healthcare' },
                { id: 9, KPI: 'Research and Development Investment', Description: 'Expenditure on developing new medical treatments', Industry: 'Healthcare' },
                { id: 10, KPI: 'Claims Denial Rate', Description: 'Percentage of insurance claims denied', Industry: 'Healthcare (Financial Services within Healthcare)' },
              ];
          } else{
            responseData = [
                { id: 1, KPI: 'Sales Revenue', Description: 'Total revenue generated', Industry: 'Healthcare' },
                { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new patient', Industry: 'Healthcare' },
                { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a patient over their lifetime', Industry: 'Healthcare' },
                { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of patient inquiries converted to actual patients', Industry: 'Healthcare' },
                { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per patient visit', Industry: 'Healthcare' },
                { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total revenue', Industry: 'Healthcare' },
                { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of patients retained over a specific period', Industry: 'Healthcare' },
                { id: 8, KPI: 'Inventory Turnover', Description: 'How quickly medical supplies or equipment are sold and replaced', Industry: 'Healthcare' },
                { id: 9, KPI: 'Repeat Purchase Rate', Description: 'Percentage of patients who return for additional services', Industry: 'Healthcare' },
                { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to actual patients', Industry: 'Healthcare' },
                { id: 11, KPI: 'Patient Satisfaction Score', Description: 'Measure of patient happiness with services', Industry: 'Healthcare' },
                { id: 12, KPI: 'Bed Occupancy Rate', Description: 'Percentage of beds occupied in a healthcare facility', Industry: 'Healthcare' },
                { id: 13, KPI: 'Average Length of Stay', Description: 'Average number of days a patient stays in the facility', Industry: 'Healthcare' },
                { id: 14, KPI: 'Physician Productivity', Description: 'Number of patients seen per physician per day', Industry: 'Healthcare' },
                { id: 15, KPI: 'Emergency Room Wait Time', Description: 'Average time patients spend in the emergency room', Industry: 'Healthcare' },
                { id: 16, KPI: 'Health Outcomes Index', Description: 'Measurement of patient health improvement over time', Industry: 'Healthcare' },
                { id: 17, KPI: 'Operating Margin', Description: 'Percentage of revenue that remains after expenses', Industry: 'Healthcare' },
                { id: 18, KPI: 'Readmission Rate', Description: 'Percentage of patients readmitted within a certain period', Industry: 'Healthcare' },
                { id: 19, KPI: 'Research and Development Investment', Description: 'Expenditure on developing new medical treatments', Industry: 'Healthcare' },
                { id: 20, KPI: 'Claims Denial Rate', Description: 'Percentage of insurance claims denied', Industry: 'Healthcare (Financial Services within Healthcare)' }
              ];
          }
          // Add more conditions for other subcategories as needed
        } else if ( category === 'FMCG') {
          // Fetch data for shares based on subcategory
          // Add similar conditions for other categories
          if(subcategory === 'Sales'){
            responseData = [
  { id: 1, KPI: 'Sales Revenue', Description: 'Revenue from product sales', Industry: 'FMCG' },
  { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new customer', Industry: 'FMCG' },
  { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'FMCG' },
  { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of leads converted to customers', Industry: 'FMCG' },
  { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per customer transaction', Industry: 'FMCG' },
  { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in product sales', Industry: 'FMCG' },
  { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of customers retained over a specific period', Industry: 'FMCG' },
  { id: 8, KPI: 'Inventory Turnover', Description: 'How quickly products are sold and replaced', Industry: 'FMCG' },
  { id: 9, KPI: 'Repeat Purchase Rate', Description: 'Percentage of customers who make repeat purchases', Industry: 'FMCG' },
  { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to customers', Industry: 'FMCG' },
];
          }else if( subcategory === 'Finance' ){
             responseData = [
                { id: 1, KPI: 'Sales Growth Rate', Description: 'Percentage increase in total sales over a period', Industry: 'FMCG' },
                { id: 2, KPI: 'Inventory Turnover Ratio', Description: 'Number of times inventory is sold or used in a period', Industry: 'FMCG' },
                { id: 3, KPI: 'Market Share', Description: 'Percentage of total market sales held by the company', Industry: 'FMCG' },
                { id: 4, KPI: 'Brand Awareness', Description: 'Measure of how well consumers recognize a brand', Industry: 'FMCG' },
                { id: 5, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire a new customer', Industry: 'FMCG (Financial Services within FMCG)' },
                { id: 6, KPI: 'Promotion Effectiveness', Description: 'Impact of marketing promotions on sales', Industry: 'FMCG' },
                { id: 7, KPI: 'Shelf Space Allocation', Description: 'Percentage of retail shelf space occupied by products', Industry: 'FMCG' },
                { id: 8, KPI: 'Customer Loyalty', Description: 'Measure of customer retention and repeat business', Industry: 'FMCG' },
                { id: 9, KPI: 'Trade Spend Efficiency', Description: 'Effectiveness of money spent on trade promotions', Industry: 'FMCG' },
                { id: 10, KPI: 'Employee Productivity', Description: 'Output per employee in terms of sales or production', Industry: 'FMCG' },
              ];
       
          }else{
            responseData = [
                { id: 1, KPI: 'Sales Growth Rate', Description: 'Percentage increase in total sales over a period', Industry: 'FMCG' },
  { id: 2, KPI: 'Inventory Turnover Ratio', Description: 'Number of times inventory is sold or used in a period', Industry: 'FMCG' },
  { id: 3, KPI: 'Market Share', Description: 'Percentage of total market sales held by the company', Industry: 'FMCG' },
  { id: 4, KPI: 'Brand Awareness', Description: 'Measure of how well consumers recognize a brand', Industry: 'FMCG' },
  { id: 5, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire a new customer', Industry: 'FMCG (Financial Services within FMCG)' },
  { id: 6, KPI: 'Promotion Effectiveness', Description: 'Impact of marketing promotions on sales', Industry: 'FMCG' },
  { id: 7, KPI: 'Shelf Space Allocation', Description: 'Percentage of retail shelf space occupied by products', Industry: 'FMCG' },
  { id: 8, KPI: 'Customer Loyalty', Description: 'Measure of customer retention and repeat business', Industry: 'FMCG' },
  { id: 9, KPI: 'Trade Spend Efficiency', Description: 'Effectiveness of money spent on trade promotions', Industry: 'FMCG' },
  { id: 10, KPI: 'Employee Productivity', Description: 'Output per employee in terms of sales or production', Industry: 'FMCG' },
                { id: 11, KPI: 'Sales Growth Rate', Description: 'Percentage increase in total sales over a period', Industry: 'FMCG' },
                { id: 12, KPI: 'Inventory Turnover Ratio', Description: 'Number of times inventory is sold or used in a period', Industry: 'FMCG' },
                { id: 13, KPI: 'Market Share', Description: 'Percentage of total market sales held by the company', Industry: 'FMCG' },
                { id: 14, KPI: 'Brand Awareness', Description: 'Measure of how well consumers recognize a brand', Industry: 'FMCG' },
                { id: 15, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire a new customer', Industry: 'FMCG (Financial Services within FMCG)' },
                { id: 16, KPI: 'Promotion Effectiveness', Description: 'Impact of marketing promotions on sales', Industry: 'FMCG' },
                { id: 17, KPI: 'Shelf Space Allocation', Description: 'Percentage of retail shelf space occupied by products', Industry: 'FMCG' },
                { id: 18, KPI: 'Customer Loyalty', Description: 'Measure of customer retention and repeat business', Industry: 'FMCG' },
                { id: 19, KPI: 'Trade Spend Efficiency', Description: 'Effectiveness of money spent on trade promotions', Industry: 'FMCG' },
                { id: 20, KPI: 'Employee Productivity', Description: 'Output per employee in terms of sales or production', Industry: 'FMCG' },
              ];
          }

         
          
          
          

        }  else if (category === 'Education') {
            // Fetch data for shares based on subcategory
            // Add similar conditions for other categories
            if(subcategory === 'Sales'){
                responseData = [
                    { id: 1, KPI: 'Sales Revenue', Description: 'Tuition fees collected', Industry: 'Education' },
                    { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each student', Industry: 'Education' },
                    { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a student over their enrollment period', Industry: 'Education' },
                    { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of inquiries converted to enrolled students', Industry: 'Education' },
                    { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per student enrollment', Industry: 'Education' },
                    { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in tuition fees', Industry: 'Education' },
                    { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of students retained over a specific period', Industry: 'Education' },
                    { id: 8, KPI: 'Inventory Turnover', Description: 'N/A (Education typically doesn\'t have inventory turnover)', Industry: 'Education' },
                    { id: 9, KPI: 'Repeat Purchase Rate', Description: 'N/A (Education doesn\'t typically have repeat purchase rate)', Industry: 'Education' },
                    { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of inquiries converted to enrolled students', Industry: 'Education' },
                  ];
            }else if(subcategory === 'Finance'){
                responseData = [
                    { id: 1, KPI: 'Student Enrollment Growth Rate', Description: 'Percentage increase in the number of enrolled students over a period', Industry: 'Education' },
                    { id: 2, KPI: 'Student Retention Rate', Description: 'Percentage of students retained or continuing their education', Industry: 'Education' },
                    { id: 3, KPI: 'Graduation Rate', Description: 'Percentage of students who successfully complete their academic program', Industry: 'Education' },
                    { id: 4, KPI: 'Academic Performance Index (API)', Description: 'Composite measure of student performance based on assessments and grades', Industry: 'Education' },
                    { id: 5, KPI: 'Student Satisfaction', Description: 'Measure of student happiness and contentment with educational experience', Industry: 'Education' },
                    { id: 6, KPI: 'Faculty-to-Student Ratio', Description: 'Number of faculty members per student', Industry: 'Education' },
                    { id: 7, KPI: 'Research Funding', Description: 'Amount of funding allocated for academic research projects', Industry: 'Education' },
                    { id: 8, KPI: 'Online Course Completion Rate', Description: 'Percentage of students completing online courses', Industry: 'Education (Online Learning)' },
                    { id: 9, KPI: 'Job Placement Rate', Description: 'Percentage of graduates successfully placed in jobs or further education', Industry: 'Education' },
                    { id: 10, KPI: 'Alumni Engagement', Description: 'Involvement and participation of alumni in educational activities', Industry: 'Education' },
                    { id: 11, KPI: 'Fundraising Effectiveness', Description: 'Success in raising funds for academic programs and facilities', Industry: 'Education' },
                    { id: 12, KPI: 'Diversity and Inclusion Index', Description: 'Measure of diversity and inclusion efforts within the educational institution', Industry: 'Education' },
                    { id: 13, KPI: 'Technology Integration', Description: 'Level of integration and effectiveness of technology in education', Industry: 'Education' },
                    { id: 14, KPI: 'Facilities Utilization', Description: 'Efficient use of physical facilities and classrooms', Industry: 'Education' },
                  ];
                  
                 
                  
            }else{
                responseData = [
                    { id: 1, KPI: 'Sales Revenue', Description: 'Tuition fees collected', Industry: 'Education' },
                    { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each student', Industry: 'Education' },
                    { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a student over their enrollment period', Industry: 'Education' },
                    { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of inquiries converted to enrolled students', Industry: 'Education' },
                    { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per student enrollment', Industry: 'Education' },
                    { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in tuition fees', Industry: 'Education' },
                    { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of students retained over a specific period', Industry: 'Education' },
                    { id: 8, KPI: 'Inventory Turnover', Description: 'N/A (Education typically doesn\'t have inventory turnover)', Industry: 'Education' },
                    { id: 9, KPI: 'Repeat Purchase Rate', Description: 'N/A (Education doesn\'t typically have repeat purchase rate)', Industry: 'Education' },
                    { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of inquiries converted to enrolled students', Industry: 'Education' },
                    { id: 11, KPI: 'Student Enrollment Growth Rate', Description: 'Percentage increase in the number of enrolled students over a period', Industry: 'Education' },
                    { id: 12, KPI: 'Student Retention Rate', Description: 'Percentage of students retained or continuing their education', Industry: 'Education' },
                    { id: 13, KPI: 'Graduation Rate', Description: 'Percentage of students who successfully complete their academic program', Industry: 'Education' },
                    { id: 14, KPI: 'Academic Performance Index (API)', Description: 'Composite measure of student performance based on assessments and grades', Industry: 'Education' },
                    { id: 15, KPI: 'Student Satisfaction', Description: 'Measure of student happiness and contentment with educational experience', Industry: 'Education' },
                    { id: 16, KPI: 'Faculty-to-Student Ratio', Description: 'Number of faculty members per student', Industry: 'Education' },
                    { id: 17, KPI: 'Research Funding', Description: 'Amount of funding allocated for academic research projects', Industry: 'Education' },
                    { id: 18, KPI: 'Online Course Completion Rate', Description: 'Percentage of students completing online courses', Industry: 'Education (Online Learning)' },
                    { id: 19, KPI: 'Job Placement Rate', Description: 'Percentage of graduates successfully placed in jobs or further education', Industry: 'Education' },
                    { id: 20, KPI: 'Alumni Engagement', Description: 'Involvement and participation of alumni in educational activities', Industry: 'Education' },
                    { id: 21, KPI: 'Fundraising Effectiveness', Description: 'Success in raising funds for academic programs and facilities', Industry: 'Education' },
                    { id: 22, KPI: 'Diversity and Inclusion Index', Description: 'Measure of diversity and inclusion efforts within the educational institution', Industry: 'Education' },
                    { id: 23, KPI: 'Technology Integration', Description: 'Level of integration and effectiveness of technology in education', Industry: 'Education' },
                    { id: 24, KPI: 'Facilities Utilization', Description: 'Efficient use of physical facilities and classrooms', Industry: 'Education' }
                  ];   
            }
          }else if(category === 'E-commerce'){
            if(subcategory === 'Sales'){
                responseData   = [
                    { id: 1, KPI: 'Sales Revenue', Description: 'Total sales revenue', Industry: 'E-commerce' },
                    { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each customer', Industry: 'E-commerce' },
                    { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
                    { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of website visitors converted to customers', Industry: 'E-commerce' },
                    { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per customer order', Industry: 'E-commerce' },
                    { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total sales', Industry: 'E-commerce' },
                    { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of customers retained over a specific period', Industry: 'E-commerce' },
                    { id: 8, KPI: 'Inventory Turnover', Description: 'How quickly products are sold and restocked', Industry: 'E-commerce' },
                    { id: 9, KPI: 'Repeat Purchase Rate', Description: 'Percentage of customers who make repeat purchases', Industry: 'E-commerce' },
                    { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of website visitors converted to customers', Industry: 'E-commerce' },
                  ];
                  
                
                  
            }else if(subcategory === 'Finance'){
                 responseData = [
                    { id: 1, KPI: 'Conversion Rate', Description: 'Percentage of website visitors who make a purchase', Industry: 'E-commerce' },
                    { id: 2, KPI: 'Average Order Value (AOV)', Description: 'Average amount spent by a customer per order', Industry: 'E-commerce' },
                    { id: 3, KPI: 'Cart Abandonment Rate', Description: 'Percentage of online shopping carts abandoned', Industry: 'E-commerce' },
                    { id: 4, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
                    { id: 5, KPI: 'Fulfillment Cost', Description: 'Cost of processing and delivering orders', Industry: 'E-commerce' },
                    { id: 6, KPI: 'Return Rate', Description: 'Percentage of products returned by customers', Industry: 'E-commerce' },
                    { id: 7, KPI: 'Mobile App Downloads', Description: 'Number of times the mobile app is downloaded', Industry: 'E-commerce' },
                    { id: 8, KPI: 'Customer Reviews', Description: 'Average rating and feedback from customers', Industry: 'E-commerce' },
                    { id: 9, KPI: 'Website Traffic', Description: 'Number of visitors to the website', Industry: 'E-commerce' },
                    { id: 10, KPI: 'Cybersecurity Breach Incidents', Description: 'Number of security breaches and data incidents', Industry: 'E-commerce (Financial Services within E-commerce)' },
                  ];
                  
                
                  
            }else{
                responseData   = [
                    { id: 1, KPI: 'Sales Revenue', Description: 'Total sales revenue', Industry: 'E-commerce' },
                    { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each customer', Industry: 'E-commerce' },
                    { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
                    { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of website visitors converted to customers', Industry: 'E-commerce' },
                    { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per customer order', Industry: 'E-commerce' },
                    { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total sales', Industry: 'E-commerce' },
                    { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of customers retained over a specific period', Industry: 'E-commerce' },
                    { id: 8, KPI: 'Inventory Turnover', Description: 'How quickly products are sold and restocked', Industry: 'E-commerce' },
                    { id: 9, KPI: 'Repeat Purchase Rate', Description: 'Percentage of customers who make repeat purchases', Industry: 'E-commerce' },
                    { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of website visitors converted to customers', Industry: 'E-commerce' },
                    { id: 11, KPI: 'Conversion Rate', Description: 'Percentage of website visitors who make a purchase', Industry: 'E-commerce' },
                    { id: 12, KPI: 'Average Order Value (AOV)', Description: 'Average amount spent by a customer per order', Industry: 'E-commerce' },
                    { id: 13, KPI: 'Cart Abandonment Rate', Description: 'Percentage of online shopping carts abandoned', Industry: 'E-commerce' },
                    { id: 14, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
                    { id: 15, KPI: 'Fulfillment Cost', Description: 'Cost of processing and delivering orders', Industry: 'E-commerce' },
                    { id: 16, KPI: 'Return Rate', Description: 'Percentage of products returned by customers', Industry: 'E-commerce' },
                    { id: 17, KPI: 'Mobile App Downloads', Description: 'Number of times the mobile app is downloaded', Industry: 'E-commerce' },
                    { id: 18, KPI: 'Customer Reviews', Description: 'Average rating and feedback from customers', Industry: 'E-commerce' },
                    { id: 19, KPI: 'Website Traffic', Description: 'Number of visitors to the website', Industry: 'E-commerce' },
                    { id: 20, KPI: 'Cybersecurity Breach Incidents', Description: 'Number of security breaches and data incidents', Industry: 'E-commerce (Financial Services within E-commerce)' },
                  ];   
            }
          }else if(category === 'Real Estate'){
            if(subcategory === 'Sales'){
                responseData = [
                    { id: 1, KPI: 'Sales Revenue', Description: 'Total revenue generated', Industry: 'Real Estate' },
                    { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new client', Industry: 'Real Estate' },
                    { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a client over their lifetime', Industry: 'Real Estate' },
                    { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of inquiries converted to actual clients', Industry: 'Real Estate' },
                    { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per real estate transaction', Industry: 'Real Estate' },
                    { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total revenue', Industry: 'Real Estate' },
                    { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of clients retained over a specific period', Industry: 'Real Estate' },
                    { id: 8, KPI: 'Inventory Turnover', Description: 'N/A (Real Estate typically doesn\'t have inventory turnover)', Industry: 'Real Estate' },
                    { id: 9, KPI: 'Repeat Purchase Rate', Description: 'N/A (Real Estate doesn\'t typically have repeat purchase rate)', Industry: 'Real Estate' },
                    { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to actual clients', Industry: 'Real Estate' },
                  ];
                  
                  
            }else if(subcategory === 'Finance'){
                responseData = [
                    { id: 1, KPI: 'Rental Yield', Description: 'Return on investment from rental income', Industry: 'Real Estate' },
                    { id: 2, KPI: 'Vacancy Rate', Description: 'Percentage of unoccupied rental units', Industry: 'Real Estate' },
                    { id: 3, KPI: 'Development Cost per Square Foot', Description: 'Cost of developing real estate per square foot', Industry: 'Real Estate' },
                    { id: 4, KPI: 'Lease Expiry Profile', Description: 'Distribution of lease expirations over time', Industry: 'Real Estate' },
                    { id: 5, KPI: 'Property Appreciation Rate', Description: 'Percentage increase in property value over time', Industry: 'Real Estate' },
                    { id: 6, KPI: 'Debt Service Coverage Ratio (DSCR)', Description: 'Ability to meet debt obligations from cash flow', Industry: 'Real Estate (Real Estate Development)' },
                    { id: 7, KPI: 'Construction Timeliness', Description: 'Completion time compared to initial estimate', Industry: 'Real Estate (Real Estate Development)' },
                    { id: 8, KPI: 'Sustainability Metrics', Description: 'Environmental and social impact of real estate', Industry: 'Real Estate' },
                    { id: 9, KPI: 'Tenant Satisfaction', Description: 'Measure of tenant happiness with property management', Industry: 'Real Estate' },
                    { id: 10, KPI: 'Return on Investment (ROI)', Description: 'Overall return on investment in real estate assets', Industry: 'Real Estate' },
                  ];
                  
                  
                  
            }else{
                responseData = [
                    { id: 1, KPI: 'Sales Revenue', Description: 'Total revenue generated', Industry: 'Real Estate' },
                    { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new client', Industry: 'Real Estate' },
                    { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a client over their lifetime', Industry: 'Real Estate' },
                    { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of inquiries converted to actual clients', Industry: 'Real Estate' },
                    { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per real estate transaction', Industry: 'Real Estate' },
                    { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total revenue', Industry: 'Real Estate' },
                    { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of clients retained over a specific period', Industry: 'Real Estate' },
                    { id: 8, KPI: 'Inventory Turnover', Description: 'N/A (Real Estate typically doesn\'t have inventory turnover)', Industry: 'Real Estate' },
                    { id: 9, KPI: 'Repeat Purchase Rate', Description: 'N/A (Real Estate doesn\'t typically have repeat purchase rate)', Industry: 'Real Estate' },
                    { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to actual clients', Industry: 'Real Estate' },
                    { id: 11, KPI: 'Rental Yield', Description: 'Return on investment from rental income', Industry: 'Real Estate' },
                    { id: 12, KPI: 'Vacancy Rate', Description: 'Percentage of unoccupied rental units', Industry: 'Real Estate' },
                    { id: 13, KPI: 'Development Cost per Square Foot', Description: 'Cost of developing real estate per square foot', Industry: 'Real Estate' },
                    { id: 14, KPI: 'Lease Expiry Profile', Description: 'Distribution of lease expirations over time', Industry: 'Real Estate' },
                    { id: 15, KPI: 'Property Appreciation Rate', Description: 'Percentage increase in property value over time', Industry: 'Real Estate' },
                    { id: 16, KPI: 'Debt Service Coverage Ratio (DSCR)', Description: 'Ability to meet debt obligations from cash flow', Industry: 'Real Estate (Real Estate Development)' },
                    { id: 17, KPI: 'Construction Timeliness', Description: 'Completion time compared to initial estimate', Industry: 'Real Estate (Real Estate Development)' },
                    { id: 18, KPI: 'Sustainability Metrics', Description: 'Environmental and social impact of real estate', Industry: 'Real Estate' },
                    { id: 19, KPI: 'Tenant Satisfaction', Description: 'Measure of tenant happiness with property management', Industry: 'Real Estate' },
                    { id: 20, KPI: 'Return on Investment (ROI)', Description: 'Overall return on investment in real estate assets', Industry: 'Real Estate' },
                  ];
            }
            
          }else{
             responseData = [
                // Healthcare
                { id: 1, KPI: 'Sales Revenue', Description: 'Total revenue generated', Industry: 'Healthcare' },
                { id: 2, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new patient', Industry: 'Healthcare' },
                { id: 3, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a patient over their lifetime', Industry: 'Healthcare' },
                { id: 4, KPI: 'Conversion Rate', Description: 'Percentage of patient inquiries converted to actual patients', Industry: 'Healthcare' },
                { id: 5, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per patient visit', Industry: 'Healthcare' },
                { id: 6, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total revenue', Industry: 'Healthcare' },
                { id: 7, KPI: 'Customer Retention Rate', Description: 'Percentage of patients retained over a specific period', Industry: 'Healthcare' },
                { id: 8, KPI: 'Inventory Turnover', Description: 'How quickly medical supplies or equipment are sold and replaced', Industry: 'Healthcare' },
                { id: 9, KPI: 'Repeat Purchase Rate', Description: 'Percentage of patients who return for additional services', Industry: 'Healthcare' },
                { id: 10, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to actual patients', Industry: 'Healthcare' },
                // Healthcare Additional
                { id: 11, KPI: 'Patient Satisfaction Score', Description: 'Measure of patient happiness with services', Industry: 'Healthcare' },
                { id: 12, KPI: 'Bed Occupancy Rate', Description: 'Percentage of beds occupied in a healthcare facility', Industry: 'Healthcare' },
                { id: 13, KPI: 'Average Length of Stay', Description: 'Average number of days a patient stays in the facility', Industry: 'Healthcare' },
                { id: 14, KPI: 'Physician Productivity', Description: 'Number of patients seen per physician per day', Industry: 'Healthcare' },
                { id: 15, KPI: 'Emergency Room Wait Time', Description: 'Average time patients spend in the emergency room', Industry: 'Healthcare' },
                { id: 16, KPI: 'Health Outcomes Index', Description: 'Measurement of patient health improvement over time', Industry: 'Healthcare' },
                { id: 17, KPI: 'Operating Margin', Description: 'Percentage of revenue that remains after expenses', Industry: 'Healthcare' },
                { id: 18, KPI: 'Readmission Rate', Description: 'Percentage of patients readmitted within a certain period', Industry: 'Healthcare' },
                { id: 19, KPI: 'Research and Development Investment', Description: 'Expenditure on developing new medical treatments', Industry: 'Healthcare' },
                { id: 20, KPI: 'Claims Denial Rate', Description: 'Percentage of insurance claims denied', Industry: 'Healthcare (Financial Services within Healthcare)' },
                // E-commerce
                { id: 21, KPI: 'Sales Revenue', Description: 'Total sales revenue', Industry: 'E-commerce' },
                { id: 22, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each customer', Industry: 'E-commerce' },
                { id: 23, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
                { id: 24, KPI: 'Conversion Rate', Description: 'Percentage of website visitors converted to customers', Industry: 'E-commerce' },
                { id: 25, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per customer order', Industry: 'E-commerce' },
                { id: 26, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total sales', Industry: 'E-commerce' },
                { id: 27, KPI: 'Customer Retention Rate', Description: 'Percentage of customers retained over a specific period', Industry: 'E-commerce' },
                { id: 28, KPI: 'Inventory Turnover', Description: 'How quickly products are sold and restocked', Industry: 'E-commerce' },
                { id: 29, KPI: 'Repeat Purchase Rate', Description: 'Percentage of customers who make repeat purchases', Industry: 'E-commerce' },
                { id: 30, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of website visitors converted to customers', Industry: 'E-commerce' },
                // Additional E-commerce
                { id: 31, KPI: 'Conversion Rate', Description: 'Percentage of website visitors who make a purchase', Industry: 'E-commerce' },
                { id: 32, KPI: 'Average Order Value (AOV)', Description: 'Average amount spent by a customer per order', Industry: 'E-commerce' },
                { id: 33, KPI: 'Cart Abandonment Rate', Description: 'Percentage of online shopping carts abandoned', Industry: 'E-commerce' },
                { id: 34, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
                { id: 35, KPI: 'Fulfillment Cost', Description: 'Cost of processing and delivering orders', Industry: 'E-commerce' },
                { id: 36, KPI: 'Return Rate', Description: 'Percentage of products returned by customers', Industry: 'E-commerce' },
                { id: 37, KPI: 'Mobile App Downloads', Description: 'Number of times the mobile app is downloaded', Industry: 'E-commerce' },
                { id: 38, KPI: 'Customer Reviews', Description: 'Average rating and feedback from customers', Industry: 'E-commerce' },
                { id: 39, KPI: 'Website Traffic', Description: 'Number of visitors to the website', Industry: 'E-commerce' },
                { id: 40, KPI: 'Cybersecurity Breach Incidents', Description: 'Number of security breaches and data incidents', Industry: 'E-commerce (Financial Services within E-commerce)' },
                // Real Estate
                { id: 41, KPI: 'Sales Revenue', Description: 'Total revenue generated', Industry: 'Real Estate' },
                { id: 42, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each new client', Industry: 'Real Estate' },
                { id: 43, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a client over their lifetime', Industry: 'Real Estate' },
                { id: 44, KPI: 'Conversion Rate', Description: 'Percentage of inquiries converted to actual clients', Industry: 'Real Estate' },
                { id: 45, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per real estate transaction', Industry: 'Real Estate' },
                { id: 46, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total revenue', Industry: 'Real Estate' },
                { id: 47, KPI: 'Customer Retention Rate', Description: 'Percentage of clients retained over a specific period', Industry: 'Real Estate' },
                { id: 48, KPI: 'Inventory Turnover', Description: 'N/A (Real Estate typically doesn\'t have inventory turnover)', Industry: 'Real Estate' },
                { id: 49, KPI: 'Repeat Purchase Rate', Description: 'N/A (Real Estate doesn\'t typically have repeat purchase rate)', Industry: 'Real Estate' },
                { id: 50, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of leads converted to actual clients', Industry: 'Real Estate' },
                // Additional Real Estate
                { id: 51, KPI: 'Rental Yield', Description: 'Return on investment from rental income', Industry: 'Real Estate' },
                { id: 52, KPI: 'Vacancy Rate', Description: 'Percentage of unoccupied rental units', Industry: 'Real Estate' },
                { id: 53, KPI: 'Development Cost per Square Foot', Description: 'Cost of developing real estate per square foot', Industry: 'Real Estate' },
                { id: 54, KPI: 'Lease Expiry Profile', Description: 'Distribution of lease expirations over time', Industry: 'Real Estate' },
                { id: 55, KPI: 'Property Appreciation Rate', Description: 'Percentage increase in property value over time', Industry: 'Real Estate' },
                { id: 56, KPI: 'Debt Service Coverage Ratio (DSCR)', Description: 'Ability to meet debt obligations from cash flow', Industry: 'Real Estate (Real Estate Development)' },
                { id: 57, KPI: 'Construction Timeliness', Description: 'Completion time compared to initial estimate', Industry: 'Real Estate (Real Estate Development)' },
                { id: 58, KPI: 'Sustainability Metrics', Description: 'Environmental and social impact of real estate', Industry: 'Real Estate' },
                { id: 59, KPI: 'Tenant Satisfaction', Description: 'Measure of tenant happiness with property management', Industry: 'Real Estate' },
                { id: 60, KPI: 'Return on Investment (ROI)', Description: 'Overall return on investment in real estate assets', Industry: 'Real Estate' },
                { id: 61, KPI: 'Sales Revenue', Description: 'Tuition fees collected', Industry: 'Education' },
                { id: 62, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each student', Industry: 'Education' },
                { id: 63, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a student over their enrollment period', Industry: 'Education' },
                { id: 64, KPI: 'Conversion Rate', Description: 'Percentage of inquiries converted to enrolled students', Industry: 'Education' },
                { id: 65, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per student enrollment', Industry: 'Education' },
                { id: 66, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in tuition fees', Industry: 'Education' },
                { id: 67, KPI: 'Customer Retention Rate', Description: 'Percentage of students retained over a specific period', Industry: 'Education' },
                { id: 68, KPI: 'Inventory Turnover', Description: 'N/A (Education typically doesn\'t have inventory turnover)', Industry: 'Education' },
                { id: 69, KPI: 'Repeat Purchase Rate', Description: 'N/A (Education doesn\'t typically have repeat purchase rate)', Industry: 'Education' },
                { id: 70, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of inquiries converted to enrolled students', Industry: 'Education' },
              
                // Education Data Set 2
                { id: 71, KPI: 'Student Enrollment Growth Rate', Description: 'Percentage increase in the number of enrolled students over a period', Industry: 'Education' },
                { id: 72, KPI: 'Student Retention Rate', Description: 'Percentage of students retained or continuing their education', Industry: 'Education' },
                { id: 73, KPI: 'Graduation Rate', Description: 'Percentage of students who successfully complete their academic program', Industry: 'Education' },
                { id: 74, KPI: 'Academic Performance Index (API)', Description: 'Composite measure of student performance based on assessments and grades', Industry: 'Education' },
                { id: 75, KPI: 'Student Satisfaction', Description: 'Measure of student happiness and contentment with educational experience', Industry: 'Education' },
                { id: 76, KPI: 'Faculty-to-Student Ratio', Description: 'Number of faculty members per student', Industry: 'Education' },
                { id: 77, KPI: 'Research Funding', Description: 'Amount of funding allocated for academic research projects', Industry: 'Education' },
                { id: 78, KPI: 'Online Course Completion Rate', Description: 'Percentage of students completing online courses', Industry: 'Education (Online Learning)' },
                { id: 79, KPI: 'Job Placement Rate', Description: 'Percentage of graduates successfully placed in jobs or further education', Industry: 'Education' },
                { id: 80, KPI: 'Alumni Engagement', Description: 'Involvement and participation of alumni in educational activities', Industry: 'Education' },
                { id: 81, KPI: 'Fundraising Effectiveness', Description: 'Success in raising funds for academic programs and facilities', Industry: 'Education' },
                { id: 82, KPI: 'Diversity and Inclusion Index', Description: 'Measure of diversity and inclusion efforts within the educational institution', Industry: 'Education' },
                { id: 83, KPI: 'Technology Integration', Description: 'Level of integration and effectiveness of technology in education', Industry: 'Education' },
                { id: 84, KPI: 'Facilities Utilization', Description: 'Efficient use of physical facilities and classrooms', Industry: 'Education' },
                { id: 85, KPI: 'Sales Growth Rate', Description: 'Percentage increase in total sales over a period', Industry: 'FMCG' },
  { id: 86, KPI: 'Inventory Turnover Ratio', Description: 'Number of times inventory is sold or used in a period', Industry: 'FMCG' },
  { id: 87, KPI: 'Market Share', Description: 'Percentage of total market sales held by the company', Industry: 'FMCG' },
  { id: 88, KPI: 'Brand Awareness', Description: 'Measure of how well consumers recognize a brand', Industry: 'FMCG' },
  { id: 89, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire a new customer', Industry: 'FMCG (Financial Services within FMCG)' },
  { id: 90, KPI: 'Promotion Effectiveness', Description: 'Impact of marketing promotions on sales', Industry: 'FMCG' },
  { id: 91, KPI: 'Shelf Space Allocation', Description: 'Percentage of retail shelf space occupied by products', Industry: 'FMCG' },
  { id: 92, KPI: 'Customer Loyalty', Description: 'Measure of customer retention and repeat business', Industry: 'FMCG' },
  { id: 93, KPI: 'Trade Spend Efficiency', Description: 'Effectiveness of money spent on trade promotions', Industry: 'FMCG' },
  { id: 94, KPI: 'Employee Productivity', Description: 'Output per employee in terms of sales or production', Industry: 'FMCG' },

  // E-commerce Data Set
  { id: 95, KPI: 'Sales Revenue', Description: 'Total sales revenue', Industry: 'E-commerce' },
  { id: 96, KPI: 'Customer Acquisition Cost (CAC)', Description: 'Cost to acquire each customer', Industry: 'E-commerce' },
  { id: 97, KPI: 'Customer Lifetime Value (CLV)', Description: 'Predicted revenue from a customer over their lifetime', Industry: 'E-commerce' },
  { id: 98, KPI: 'Conversion Rate', Description: 'Percentage of website visitors converted to customers', Industry: 'E-commerce' },
  { id: 99, KPI: 'Average Transaction Value (ATV)', Description: 'Average revenue generated per customer order', Industry: 'E-commerce' },
  { id: 100, KPI: 'Sales Growth Rate', Description: 'Year-over-year percentage increase in total sales', Industry: 'E-commerce' },
  { id: 101, KPI: 'Customer Retention Rate', Description: 'Percentage of customers retained over a specific period', Industry: 'E-commerce' },
  { id: 102, KPI: 'Inventory Turnover', Description: 'How quickly products are sold and restocked', Industry: 'E-commerce' },
  { id: 103, KPI: 'Repeat Purchase Rate', Description: 'Percentage of customers who make repeat purchases', Industry: 'E-commerce' },
  { id: 104, KPI: 'Lead-to-Customer Ratio', Description: 'Ratio of website visitors converted to customers', Industry: 'E-commerce' },
              ];
              
          }
  

        // Set the fetched data to the state
        setData(responseData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category, subcategory]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'KPI', headerName: 'Name', width: 300 },
    { field: 'Description', headerName: 'Description', width: 400 },
    { field: 'Industry', headerName: 'Industry', width: 200 }
  ];

  return (
    <conatiner style={{ height: 400, width: '98%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </conatiner>
  );
};

export default DataTable;
