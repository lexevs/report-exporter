package gov.nih.nci.evs.report.exporter.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Synonym {

	
    private String name;
    private String termGroup;
    private String type;
    private String source;
    private String code;
    private String subSource;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTermGroup() {
		return termGroup;
	}
	public void setTermGroup(String termGroup) {
		this.termGroup = termGroup;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getSubSource() {
		return subSource;
	}
	public void setSubSource(String subSource) {
		this.subSource = subSource;
	}
    
    public String toString() {
    	return  "source: " + source + " name: " + name;
    }
}
