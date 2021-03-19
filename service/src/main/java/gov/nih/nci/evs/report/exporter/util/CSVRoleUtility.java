package gov.nih.nci.evs.report.exporter.util;

import java.util.List;
import java.util.stream.Collectors;

import gov.nih.nci.evs.report.exporter.model.RestRolesEntity;


public class CSVRoleUtility extends FormatUtility {

	

	public String produceCSVOutputFromListWithHeading(List<RestRolesEntity> list, String roles, String searchCodes, String separator) {

		CommonServices services = new CommonServices();
		StringBuffer firstLine = new StringBuffer();
		StringBuffer oneLine = new StringBuffer();
		list.stream().forEach(x ->  
				oneLine.append("\r\n" +
						x.getRoles()
						.stream()
						.map(role -> 
								services.calculateAndProduceSpacedRoles(role, x.getCode(), x.getName(),separator)).collect(Collectors.joining("\r\n"))));				
		firstLine.append(services.getRoleHeadings().stream()
			.collect(Collectors.joining(separator)));
		oneLine.insert(0, firstLine);
		oneLine.append(produceDelimitedRoleQueryRecord(separator,searchCodes,roles));
		return oneLine.toString();
	}

}
